# PediCode — Checklist de Deploy (manifest + ícones)

## Estrutura de ficheiros no repositório GitHub

```
PediCode/
├── index.html          ← modificar <head> (ver HEAD_SNIPPET.html)
├── manifest.json       ← substituir pelo ficheiro entregue
├── icons/
│   ├── pedicode_icon_180.png        (180x180)
│   ├── pedicode_icon_192.png        (192x192)
│   ├── pedicode_icon_192_maskable.png  (192x192, fundo escuro, safe zone 80%)
│   ├── pedicode_icon_512.png        (512x512)
│   ├── pedicode_icon_512_maskable.png  (512x512, fundo escuro, safe zone 80%)
│   └── pedicode_icon_1024.png       (1024x1024)
└── screenshots/
    ├── screenshot_mobile.png        (540x720)  ← AINDA FALTA criar
    └── screenshot_desktop.png       (1280x800) ← AINDA FALTA criar
```

## Passos no index.html

1. Localizar a linha:
   `<link rel="icon" type="image/png" href="data:image/png;base64,/9j/4AAQ...`
   
2. **Apagar** essa linha inteira (a base64 é muito longa, começa com /9j/4AAQ)

3. **Substituir** pelo conteúdo de HEAD_SNIPPET.html

4. Verificar que existe `<meta name="theme-color" content="#0EA5E9">`
   (estava #0b0f1a no HTML — deve ser #0EA5E9 para coincidir com o manifest)

## Verificação depois do push

Depois de fazer push para o GitHub, aguardar ~60 segundos e verificar:

1. https://delfos-iq.github.io/PediCode/manifest.json
   → deve devolver JSON válido com paths relativos (não base64)

2. https://delfos-iq.github.io/PediCode/icons/pedicode_icon_512.png
   → deve mostrar o ícone do urso

3. Testar em PWABuilder: https://www.pwabuilder.com
   → colar: https://delfos-iq.github.io/PediCode/
   → score esperado: ≥ 95/100

## Screenshots (passo seguinte)

Para a Play Store são obrigatórias screenshots reais.
Capturas de ecrã do Chrome DevTools em modo mobile (540px largura):
- screenshot_mobile.png: 540x720
- screenshot_desktop.png: 1280x800

Colocar em /screenshots/ no repositório.

## Depois de tudo verificado → PWABuilder → APK

1. pwabuilder.com → analisar URL
2. Android → Generate Package
3. Package name: com.pedicode.app
4. Guardar o keystore gerado (necessário para atualizações futuras)
5. Anotar o SHA-256 do keystore (necessário para assetlinks.json)
