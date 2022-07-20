export async function listGames(req, res) {
  try {
    res.send("lista jogos");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function addGame(req, res) {
  try {
    res.send("adicionar jogo");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
