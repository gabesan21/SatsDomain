// Your contract address

async function montar() {
  let dominio = document.getElementById("nome").value;
  let carteira = document.getElementById("carteira").value;
  let nostr = document.getElementById("nostr").value;

  let final = {
    p: "sns",
    op: "reg",
    name: dominio + ".sats",
  };

  if(carteira != "") final["btc"] = carteira;	
  if(nostr != "") final["npub"] = nostr;	

  let finalJSON = JSON.stringify(final);
  document.getElementById("resultado").innerText = finalJSON;
}

async function pesquisar() {
  let button = document.getElementById("pesquisar");
  button.disabled = true;
  button.innerText = "Pesquisando...";

  let dominio = document.getElementById("dominio").value;
  const link = "https://api.sats.id/names/"+dominio+".sats";

  const response = await fetch(link);
  const data = await response.json();
  if ('name' in data){
    document.getElementById("resultadoPesquisa").innerHTML = "Dominio: " + data.name + " Já está registrado";
  }else{
    document.getElementById("resultadoPesquisa").innerHTML = "Dominio: " + dominio + ".sats Disponivel";
  }

  button.disabled = false;
  button.innerText = "Pesquisar";
}
