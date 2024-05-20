module.exports = {
  async find(req, res) {
    try {
      const alunos = await Aluno.find();
      return res.json(alunos);
    } catch (err) {
      return res.serverError(err); // Lidar com erros de servidor
    }
  },

  async findOne(req, res) {
    try {
      const aluno = await Aluno.findOne(req.params.id);
      if (!aluno) {
        return res.notFound(); // Retornar 404 se não encontrado
      }
      return res.json(aluno);
    } catch (err) {
      return res.serverError(err);
    }
  },

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(201).json(aluno); // Retornar 201 Created
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.badRequest(err); // Lidar com erros de validação
      }
      return res.serverError(err);
    }
  },

  async update(req, res) {
    try {
      const aluno = await Aluno.updateOne(req.params.id, req.body);
      if (!aluno) {
        return res.notFound();
      }
      return res.json(aluno);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.badRequest(err);
      }
      return res.serverError(err);
    }
  },

  async destroy(req, res) {
    try {
      const aluno = await Aluno.destroyOne(req.params.id);
      if (!aluno) {
        return res.notFound();
      }
      return res.ok(); // Retornar 200 OK
    } catch (err) {
      return res.serverError(err);
    }
  },
};
