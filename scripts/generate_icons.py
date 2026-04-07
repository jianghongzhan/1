from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename, text):
    img = Image.new('RGB', (size, size), color='#FBBF24')
    draw = ImageDraw.Draw(img)
    
    try:
        font_size = int(size * 0.3)
        font = ImageFont.truetype('C:/Windows/Fonts/msyh.ttc', font_size)
    except:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size - text_width) / 2
    y = (size - text_height) / 2 - bbox[1]
    
    draw.text((x, y), text, font=font, fill='#1F2937')
    img.save(filename, 'PNG')
    print(f'Created {filename}')

create_icon(192, 'D:/openclaw/.openclaw/shared/cet4-workshop/icon-192.png', 'CET4')
create_icon(512, 'D:/openclaw/.openclaw/shared/cet4-workshop/icon-512.png', 'CET4')
print('PWA icons generated!')