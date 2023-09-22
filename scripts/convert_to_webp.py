import os 

from pathlib import Path

from PIL import Image 

from svglib.svglib import svg2rlg # Function to convert SVG to reportlab graphics

from reportlab.graphics import renderPM # Module for generating PDFs from graphics

import sys 

sys.path.append("..") # Add parent directory to module search path 

# List of supported image formats
image_types = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff']

def convert_to_webp(source):
  """Converts an image to WebP format

  Opens the source image file with PIL, saves it as WebP, 
  then deletes the original source file.

  Args:
    source (Path): Path object pointing to source image

  Returns:
    Path: Path to converted WebP image
  """

  destination = source.with_suffix(".webp") # New filename
  
  try:
    image = Image.open(source) # Open with PIL
    image.save(destination, format="webp") # Save as WebP
    os.remove(source) # Delete original
    return destination

  except ValueError as e:
    print(f"Error converting {source}: {e}")

def update_paths(file_path):
  """Updates image paths in a file to WebP

  Opens a file, finds image references, 
  updates them to use .webp, and writes changes.

  Args:
    file_path (Path): Path to file to update
  """

  try:
    with open(file_path, 'r') as file:
      data = file.read()

    new_data = data

    # Update image extensions to .webp
    for img_type in image_types:
      new_data = new_data.replace(img_type, '.webp')

    if new_data != data:
      with open(file_path, 'w') as file:
        file.write(new_data)
  
  except UnicodeDecodeError:
    print(f"Error reading {file_path}: UnicodeDecodeError")


def main():
  """Main function"""

  current_path = Path('../') # Current directory
  
  for file_path in current_path.rglob('*'):

    if 'node_modules' in file_path.parts:
      continue # Skip node_modules
    
    if '.docusaurus' in file_path.parts: 
      continue # Skip .docusaurus

    if file_path.is_file(): # Only process files
    
      if file_path.suffix in image_types:
        convert_to_webp(file_path) # Convert image

      elif file_path.suffix in ['.js', '.md']:
        update_paths(file_path) # Update image references

if __name__ == "__main__":
  main()
