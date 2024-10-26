 document.getElementById('create_graph').addEventListener('click', function() {
            const numVertices = document.getElementById('num_vertices').value;
            fetch('/create_graph', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `num_vertices=${numVertices}`
            })
            .then(response => response.json())
            .then(data => alert(data.message || data.error))
            .catch(error => console.error('Error:', error));
        });

        document.getElementById('add_edge').addEventListener('click', function() {
            const u = document.getElementById('vertex_u').value;
            const v = document.getElementById('vertex_v').value;
            fetch('/add_edge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ u: parseInt(u), v: parseInt(v) })
            })
            .then(response => response.json())
            .then(data => alert(data.message || data.error))
            .catch(error => console.error('Error:', error));
        });

        document.getElementById('generate_graph').addEventListener('click', function() {
            fetch('/generate_graph')
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                document.getElementById('graph_img').style.display = 'block';
                document.getElementById('graph_img').src = '/static/graph.png?' + new Date().getTime();
            })
            .catch(error => console.error('Error:', error));
        });

        document.getElementById('check_hamiltonian').addEventListener('click', function() {
            fetch('/check_hamiltonian')
            .then(response => response.json())
            .then(data => {
                document.getElementById('cycle_result').textContent = data.cycle;
                document.getElementById('path_result').textContent = data.path;
            })
            .catch(error => console.error('Error:', error));
        });