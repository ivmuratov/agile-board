const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const PORT = 8080;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 1000);
  });
  next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
  jsonServer.rewriter({
    '/projects/:projectId/tasks/:taskId': '/tasks/:taskId',
  }),
);

server.use((req, res, next) => {
  if (req.originalUrl.match(/^\/projects\/\d\/tasks/) && req.method === 'POST') {
    req.body.createdDate = new Date().toLocaleString();    
  } else if (req.originalUrl.match(/^\/tasks\/\d/) && req.method === 'PATCH') {
    req.body.updatedDate = new Date().toLocaleString();
  }  
  next();
})

// GET projects with countTasks
server.get('/projects', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const modifyProjectsFromDb = projects.map(projectValue => {
      const filteredTasks = tasks.filter(taskValue => taskValue.projectId == projectValue.id);
      return { ...projectValue, countTasks: filteredTasks.length };
    });
    return res.status(200).json(modifyProjectsFromDb);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
});

// GET project by id with countTasks
server.get('/projects/:projectId', (req, res) => {
  try {
    const { projectId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const projectFromDb = projects.find(value => value.id == projectId);
    if (!projectFromDb) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const countTasks = tasks.filter(value => value.projectId == projectId).length;
    
    return res.status(200).json({ ...projectFromDb, countTasks });
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
});

// GET tasks by projectId
server.get('/projects/:projectId/tasks', (req, res) => {
  try {
    const { projectId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const projectFromDb = projects.find(value => value.id == projectId);
    if (!projectFromDb) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const tasksFromDb = tasks.filter(value => value.projectId == projectId);

    return res.status(200).json(tasksFromDb);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
});

// GET task by projectId, taskId
/* server.get('/projects/:projectId/tasks/:taskId', (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { tasks } = db;

    const taskFromDb = tasks.find(value => value.id == taskId && value.projectId == projectId);
    if (!taskFromDb) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(taskFromDb);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}); */

// CREATE task by projectId, taskId
/* server.post('/projects/:projectId/tasks', (req, res) => {
  try {
    const { projectId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const projectFromDb = projects.find(value => value.id == projectId);
    if (!projectFromDb) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    const { id } = tasks[tasks.length - 1];
    const createdTask = {
      id: id + 1,
      ...req.body,
      createdDate: new Date().toLocaleString(),
      updatedDate: '',
      finishedDate: '',
      projectId: +projectId,
    };
    tasks.push(createdTask);
        
    fs.writeFileSync(
      path.resolve(__dirname, 'db.json'),
      JSON.stringify({ projects, tasks }, null, 2),
      'UTF-8'
    );
    
    return res.status(200).json(createdTask);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}); */

// UPDATE task by projectId, taskId
/* server.put('/projects/:projectId/tasks/:taskId', (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const taskFromDb = tasks.find(value => value.id == taskId && value.projectId == projectId);
    if (!taskFromDb) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    const updatedTask = {
      ...taskFromDb,
      ...req.body,
      updatedDate: new Date().toLocaleString(),
    };
    console.log(updatedTask);
        
    fs.writeFileSync(
      path.resolve(__dirname, 'db.json'),
      JSON.stringify({ projects, tasks }, null, 2),
      'UTF-8'
    );
    
    return res.status(200).json(updatedTask);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
});
 */
// DELETE task by projectId, taskId
/* server.delete('/projects/:projectId/tasks/:taskId', (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { projects, tasks } = db;

    const taskFromDb = tasks.find(value => value.id == taskId && value.projectId == projectId);
    if (!taskFromDb) {
      return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(tasks.indexOf(taskFromDb), 1);

    fs.writeFileSync(
      path.resolve(__dirname, 'db.json'),
      JSON.stringify({ projects, tasks }, null, 2),
      'UTF-8'
    );
    
    return res.status(200).json(taskFromDb);
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
}); */

server.use(router);

server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
  console.log();
  console.log(`http://localhost:${PORT}/projects/`);
  console.log(`http://localhost:${PORT}/projects/1/tasks`);
});
