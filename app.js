const express = require('express');


const app = express();
app.use(express.json());

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

app.post('/voitures', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: "het name w id ." });
    }
    voitures.push({ id, name });
    res.status(201).json({ message: "Voiture added successfully." });
});
app.get('/voitures', (req, res) => {
    res.json(voitures);
});
app.get('/voitures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
});
app.delete('/voitures/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const i = voitures.findIndex (v => v.id == id);
    if (i !== -1){
        voitures.splice(i,1)
        res.json({ message: 'Voiture supprimée avec succès' });
    }else {
        res.status(404).json({ message: 'Voiture non trouvée' });
    }
})

app.listen(5000,()=>{
    console.log('port')
});
