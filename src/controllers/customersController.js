export async function listCustomers(req, res) {
  try {
    res.send("listar cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function findCustomer(req, res) {
  try {
    res.send("procurando cliente");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
