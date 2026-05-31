import os, json
photos=[]
for f in sorted(os.listdir('photos')):
    if f.lower().endswith(('.jpg','.jpeg','.png','.webp')):
        photos.append({'name':os.path.splitext(f)[0],'file':'photos/'+f})
with open('photos.json','w',encoding='utf-8') as out:
    json.dump(photos,out,indent=2,ensure_ascii=False)
print('photos.json generated')
