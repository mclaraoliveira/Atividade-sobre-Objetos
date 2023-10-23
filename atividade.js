const celular = {
    cor: "Azul",
    dono: "Paulo",
    marca: "Xiaomi",
  
    buscarCor: function() {
      return `A cor do celular é ${this.cor}`;
    },
  
    mudarMarca: function(novaMarca) {
      this.marca = novaMarca;
    },

    mudarDono: function(novoDono) {
        this.dono = novoDono;
      },
  
  };

const livro = {
    genero: "Mistério",
    autor: "Dan Brown",
    paginas: 375,

    infos: function() {
        return `Gênero: ${this.genero}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
      },
    
    mudarAutor: function(novoAutor) {
        this.autor = novoAutor;
      },
    
    aumentarPaginas: function(quantidade) {
        this.paginas += quantidade;
      },
}

const artigo = {
  titulo: "1989 (Taylor's Version)",
  conteudo: "A regravação do álbum 1989, da cantora Taylor Swift, será lançada no dia 27/10/2023",
  autor: "Clara Oliveira",

  editarConteudo: function(novoConteudo) {
    this.conteudo = novoConteudo;
  },

  contarPalavras: function() {
    const palavras = this.conteudo.split(' ').length;
    return palavras;
  },

  editarTitulo: function(novoTitulo) {
    this.titulo = novoTitulo;
  },

}

const email = {
  remetente: "clara@email.com",
  destinatario: "joao@email.com",
  assunto: "Plantas",

  enviarEmail: function() {
    console.log(`Enviando e-mail para ${this.destinatario}...`);
    console.log("E-mail enviado com sucesso.");
  },

  encaminharEmail: function(novoDestinatario) {
    console.log(`Encaminhando e-mail de ${this.remetente} para ${novoDestinatario}...`);
    console.log("E-mail encaminhado com sucesso.");
  },

  buscarAssunto: function() {
    return `O assunto do e-mail é ${this.assunto}`;
  },

};
