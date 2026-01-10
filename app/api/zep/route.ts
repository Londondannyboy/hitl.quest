import { NextRequest, NextResponse } from 'next/server';
import { ZepClient } from '@getzep/zep-cloud';

// Graph ID for shared HITL knowledge
const HITL_GRAPH_ID = 'hitl_knowledge';

// Initialize Zep client
const getZepClient = () => {
  const apiKey = process.env.ZEP_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new ZepClient({ apiKey });
};

// Ensure user exists in Zep
export async function POST(request: NextRequest) {
  try {
    const client = getZepClient();
    if (!client) {
      return NextResponse.json(
        { error: 'Zep not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { userId, email, name, action } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    // Sanitize userId for Zep (remove hyphens)
    const zepUserId = userId.replace(/-/g, '');

    switch (action) {
      case 'ensure_user':
        // Try to get user, create if doesn't exist
        try {
          const user = await client.user.get(zepUserId);
          return NextResponse.json({ user, created: false });
        } catch {
          // User doesn't exist, create them
          const newUser = await client.user.add({
            userId: zepUserId,
            email: email || undefined,
            firstName: name?.split(' ')[0] || undefined,
            lastName: name?.split(' ').slice(1).join(' ') || undefined,
          });
          return NextResponse.json({ user: newUser, created: true });
        }

      case 'add_fact':
        // Add a fact to user's graph
        const { fact } = body;
        if (!fact) {
          return NextResponse.json(
            { error: 'fact is required for add_fact action' },
            { status: 400 }
          );
        }
        await client.graph.add({
          userId: zepUserId,
          type: 'text',
          data: fact,
        });
        return NextResponse.json({ success: true });

      case 'init_hitl_graph':
        // Initialize the shared HITL knowledge graph
        try {
          await client.graph.create({
            graphId: HITL_GRAPH_ID,
            name: 'HITL Knowledge Graph',
          });
          return NextResponse.json({ success: true, graphId: HITL_GRAPH_ID, created: true });
        } catch (e: any) {
          // Graph might already exist
          if (e.message?.includes('already exists')) {
            return NextResponse.json({ success: true, graphId: HITL_GRAPH_ID, created: false });
          }
          throw e;
        }

      case 'add_hitl_knowledge':
        // Add knowledge to the shared HITL graph
        const { knowledge } = body;
        if (!knowledge) {
          return NextResponse.json(
            { error: 'knowledge is required for add_hitl_knowledge action' },
            { status: 400 }
          );
        }
        await client.graph.add({
          graphId: HITL_GRAPH_ID,
          type: 'text',
          data: knowledge,
        });
        return NextResponse.json({ success: true });

      case 'search_hitl':
        // Search the HITL knowledge graph
        const { query } = body;
        if (!query) {
          return NextResponse.json(
            { error: 'query is required for search_hitl action' },
            { status: 400 }
          );
        }
        const results = await client.graph.search({
          graphId: HITL_GRAPH_ID,
          query: query,
          limit: 10,
        });
        return NextResponse.json({ results });

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }
  } catch (error: any) {
    console.error('Zep API error:', error);
    return NextResponse.json(
      { error: error.message || 'Zep API error' },
      { status: 500 }
    );
  }
}

// Get user info
export async function GET(request: NextRequest) {
  try {
    const client = getZepClient();
    if (!client) {
      return NextResponse.json(
        { error: 'Zep not configured' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId query param is required' },
        { status: 400 }
      );
    }

    const zepUserId = userId.replace(/-/g, '');

    try {
      const user = await client.user.get(zepUserId);
      return NextResponse.json({ user });
    } catch {
      return NextResponse.json({ user: null });
    }
  } catch (error: any) {
    console.error('Zep API error:', error);
    return NextResponse.json(
      { error: error.message || 'Zep API error' },
      { status: 500 }
    );
  }
}
