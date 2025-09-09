export class Text {
  public static truncate(text?: string, mobileLength?: number, maxLength: number = 30) {
    if (!text) return "";

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    if (text.length > (isMobile && mobileLength ? mobileLength : maxLength)) {
      return text.substring(0, maxLength - 5) + " ...";
    }

    return text;
  }

  public static capitalizeEachWord(text: string) {
    return text.split(" ").map((word) => {
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + text.slice(1);
    }).join(" ");
  }
}