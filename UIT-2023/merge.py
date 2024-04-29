from PIL import Image
import os

def merge_images(input_folder, output_path, target_size):
    image_files = [f for f in os.listdir(input_folder) if f.endswith('.png')]

    merged_image = Image.new('RGB', (target_size, target_size), (255, 255, 255))

    current_x, current_y = 0, 0
    for image_file in image_files:
        image_path = os.path.join(input_folder, image_file)
        img = Image.open(image_path)

        merged_image.paste(img, (current_x, current_y))

        current_x += img.width

        if current_x >= target_size:
            current_x = 0
            current_y += img.height

    merged_image.save(output_path)

input_folder = "flag"
output_path = "merged_image.png"
target_size = 1300

merge_images(input_folder, output_path, target_size)
