import path from "path";

/**
 * Utility for accessing files.
 */
class Files {
  /**
   * Gets the filepath from a list of directories
   * and filename.
   *
   * Example:
   * Files.from("images", "profile", "me.png");
   *
   * @param paths list of directories and filename
   * @returns filepath
   */
  static from(...paths: string[]) {
    paths.unshift(process.env.PUBLIC_URL);
    return path.join(...paths);
  }
}

/**
 * Exports the Files static class.
 */
export default Files;
