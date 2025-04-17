export async function DELETE(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  return Response.json(Object.fromEntries(searchParams.entries()));
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  return Response.json(Object.fromEntries(searchParams.entries()));
}

export async function PATCH(request: Request): Promise<Response> {
  const body = await request.json();

  return Response.json(body);
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();

  return Response.json(body);
}
