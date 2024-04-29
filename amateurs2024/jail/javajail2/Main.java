class Main {
  public static void main(String... args) {
    try {
      System.out.println(String.class.getClass().forName("java.nio.file.Files").getMethod("readAllLines", java.nio.file.Path.class).invoke(
        null, String.class.getClass().forName("java.nio.file.Paths").getMethod("get", String.class, args.getClass()).invoke(null, "flag.txt", args)));
    } catch (Exception e) {
        e.printStackTrace();
    }
  }
}
