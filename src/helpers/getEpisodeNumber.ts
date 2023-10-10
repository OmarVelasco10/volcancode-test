
export const getEpisodeNumber = (url: string): string => {
    const parts = url.split('/');

    if(parts.length >= 2 ) {
        return parts[parts.length - 1];
    }

    return "N/A";
}