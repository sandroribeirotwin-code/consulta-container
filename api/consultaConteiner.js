export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ erro: "Método não permitido" });
  }

  try {
    const endpoint = "https://integraaquiapi.santosbrasil.com.br/consultas/consultaConteiner";

    const resposta = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const dados = await resposta.json();
    return res.status(200).json(dados);

  } catch (erro) {
    return res.status(500).json({ erro: erro.toString() });
  }
}
