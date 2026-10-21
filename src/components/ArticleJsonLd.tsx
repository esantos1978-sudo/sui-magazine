import { getArticleJsonLd, type Article } from "@/content/articles";

type ArticleJsonLdProps = {
  article: Article;
};

/**
 * Inyecta los datos estructurados `Article` de una pieza editorial.
 *
 * Google acepta JSON-LD tanto en el `<head>` como en el `<body>`. Se mantiene
 * junto al contenido de la página para que cada artículo declare sus propios
 * datos sin duplicar el JSON en los cinco archivos de ruta.
 */
export default function ArticleJsonLd({ article }: ArticleJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getArticleJsonLd(article)),
      }}
    />
  );
}
