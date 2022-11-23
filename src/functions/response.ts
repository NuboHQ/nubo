export class NuboResponse extends Response {
  public static json(body: any) {
    const response = new Response(JSON.stringify(body), {
      headers: { 'content-type': 'application/json' },
    });

    return response;
  }
}
