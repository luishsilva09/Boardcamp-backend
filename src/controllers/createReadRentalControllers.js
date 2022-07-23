export async function listRentals(req, res) {
  try {
    res.send("listar");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addRental(req, res) {
  try {
    res.send("adicionar");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
