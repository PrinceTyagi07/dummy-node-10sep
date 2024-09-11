
const fs = require('fs').promises;
const users = require('../users.json')

exports.allUsers = async (req, res) => {
    await res.json(users);
}
exports.particularUsers = async (req, res) => {
    let id = req.params.id;

    let user = users.find(user => user.id == id);

    await res.json(user);
}
exports.adduser = async (req, res) => {
    try {
        console.log(req.body);
        // req.body.id = users.length + 1;
        users.push(req.body);

        // Save the entire users array to the JSON file
        await fs.writeFile('users.json', JSON.stringify(users));

        console.log("Added Successfully");
        res.status(200).send("User added successfully");
    } catch (err) {
        console.error("Error writing file", err);
        res.status(500).send("An error occurred");
    }

}