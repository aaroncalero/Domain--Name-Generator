console.log("Hola");

    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let namedom =['us','org','com','net'];
    let domain=[];
    let dom=[];

  
    for(let i=0;i<pronoun.length;i++){
        dom=pronoun[i];
      for(let j=0;j<adj.length;j++ ){
          dom=pronoun[i]+adj[j];
          for(let t=0;t<adj.length;t++){
              dom=pronoun[i]+adj[j]+noun[t]
              for(let x=0; x<namedom.length;x++){
                  domain=namedom[x]
                console.log(dom +"."+domain);
              }
              
          }
      }

}

/// parte dos para un dominio

    for(let i=0;i==0;i++){
        domi=pronoun[Math.floor(Math.random()*pronoun.length)];
      for(let j=0;j==0;j++ ){
          domib=adj[Math.floor(Math.random()*adj.length)];
          for(let t=0;t==0;t++){
              domic= noun[Math.floor(Math.random()*noun.length)]
              let dom=(domia+domib+domic);
              console.log(dom +".com");
          }
      }

}