import unicodedata

def convert_to_zero_width(text):
    zero_width = '\u200b'  # Zero-width space character
    zero_width_text = ''.join(zero_width if unicodedata.category(char) != 'Zs' else char for char in text)
    return zero_width_text

# Example usage
normal_text = "This is a test sentence."
zero_width_text = convert_to_zero_width(normal_text)
print(zero_width_text)
