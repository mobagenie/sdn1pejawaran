---
title: "{{ .TranslationBaseName | replaceRE "^[0-9]{14}-" "" | replaceRE "-" " " | title }}"
post_highlight: 
author: MobaGenie
date: {{ .Date }}
PublishDate: {{ .Date }}
Lastmod: 
slug: {{substr ( lower .File.BaseFileName  | replaceRE "^[0-9]{14}-" "" | replaceRE "," "") 0 80 }}
categories: 
- 
- 
tags: 
- 
images: 
- 
draft: false
---


