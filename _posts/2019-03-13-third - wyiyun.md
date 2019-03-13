---
title:        "爬虫之网易云"
description:  "python小程序爬取网易云付费音乐~"
author:       "柚子"
---

### 【主体代码来自网络】python小程序爬取网易云付费音乐~ ###
只需要配置python运行环境，下载相关依赖包就可以免费获取网易云付费电影啦~~

先上效果图：
![cmd](/img/port2/1.png)

<a href="/port2/python-wyiyun.zip" download = "daoQQ.zip">点击下载源码</a>

代码如下：
~~~python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests
import json
 
headers = {
    'Host': 'c.y.qq.com',
    'Referer': 'http://c.y.qq.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121' 
                   'Safari/537.36'
}
 
 
def douqq_post(mid):
    post_url = 'http://www.douqq.com/qqmusic/qqapi.php'
    data = {'mid': mid}
    res = requests.post(post_url, data=data)
    get_json = json.loads(res.text)
    return eval(get_json)
 
 
def download_file(src, file_path):
    r = requests.get(src, stream=True)
    f = open(file_path, "wb")
    for chunk in r.iter_content(chunk_size=512):
        if chunk:
            f.write(chunk)
    return file_path
 
 
def choice_download(dic):
    #print('1. m4a视频')
    #print('2. mp3普通品质')
    #print('3. mp3高品质')
    #print('4. ape高品无损')
    #print('5. flac无损音频')
    #select = int(input("Please input your choice:"))
    select = 2
    src = ''
    postfix = ''
    if select == 1:
        src = dic['m4a']
        postfix = '.m4a'
    if select == 2:
        src = dic['mp3_l']
        postfix = '.mp3'
    if select == 3:
        src = dic['mp3_h']
        postfix = '.mp3'
    if select == 4:
        src = dic['ape']
        postfix = '.ape'
    if select == 5:
        src = dic['flac']
        postfix = '.flac'
    return postfix, src.replace('\/\/', '//').replace('\/', '/')
 
 
def find_song(word):
    get_url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n' \
              '=20&w=' + word
    res1 = requests.get(get_url, headers=headers)
    get_json = json.loads(res1.text.strip('callback()[]'))
    jsons = get_json['data']['song']['list']
    songmid = []
    media_mid = []
    song_singer = []
    i = 1
    for song in jsons:
        print(i, ':' + song['songname'], '---', song['singer'][0]['name'])
        try:
            i = i + 1
            songmid.append(song['songmid'])
            media_mid.append(song['media_mid'])
            song_singer.append(song['singer'][0]['name'])           
        except:
            pass
    select = int(input("Please input your choice:")) - 1
    return songmid[select], song_singer[select]
 
 
if __name__ == '__main__':
    print('Input __QUIT__　quit!')
    while 1:
        songname = input("Please input the music name:")
        if songname == '__QUIT__':
            break
        song_mid, singer = find_song(songname)
        print(song_mid, singer)
        dic = douqq_post(song_mid)
        postfix, url = choice_download(dic)
        save_path = "F://music"#这里改成你自己的额路径
        download_file(url, save_path + songname + ' - ' + singer + postfix)
        #print(url)
        print('Download Successful')
~~~

