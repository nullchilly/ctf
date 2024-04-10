class Main {
    public static void main(String... args) {
        try {
            System.out.println(java.nio.file.Files.readAllLines(java.nio.file.Paths.get("flag.txt")));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
