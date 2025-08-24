  function nextTab(tabNumber) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.getElementById('tab' + tabNumber).classList.add('active');
        }

        function prevTab(tabNumber) {
            nextTab(tabNumber);
        }