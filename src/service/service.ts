export class Service {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }
  async getData(): Promise<string> {
    const response = await fetch(this.url, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    return data
  }
}