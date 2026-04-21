export function getAnchor(data: { anchor?: string; title: string }): string {
    return data.anchor ?? data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
