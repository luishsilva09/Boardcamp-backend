export async function addCustomer(req, res) {
  try {
    res.send("adicionar cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function updateCustomer(req, res) {
  try {
    res.send("atualizar cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
