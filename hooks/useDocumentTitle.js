import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Atualiza o título sempre que o valor de 'title' mudar
}

export default useDocumentTitle;
