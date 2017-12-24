# medical-final-report

[![CircleCI](https://circleci.com/gh/i544c/medical-final-report.svg?style=svg&circle-token=7764432097490e000464dffc921c030b12784712)](https://circleci.com/gh/i544c/medical-final-report)

医療班の最終報告書


## Contribute
```
docker-compose up -d

#変更があるたびに
docker-compose exec latex ptex2pdf -l report.tex
```

推奨エディタは[Atom](https://atom.io/)。
以下のパッケージを使用すると、便利。

* [on-save](https://atom.io/packages/on-save)
texファイル保存時にPDFに変換するようにできる。

* [editorconfig](https://atom.io/packages/editorconfig)
インデントやその他諸々を矯正する。
