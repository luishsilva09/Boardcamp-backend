export async function listCategories(req, res) {
  try {
    res.send("rota get categorias");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function addCategorie(req, res) {
  try {
    res.send("Inserir categoria");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
