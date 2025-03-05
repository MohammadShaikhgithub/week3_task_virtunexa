
        document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.getElementById("menuToggle");
            const sidebar = document.getElementById("sidebar");

            menuToggle.addEventListener("click", function() {
                if (sidebar.classList.contains("show-sidebar")) {
                    sidebar.classList.remove("show-sidebar");
                } else {
                    sidebar.classList.add("show-sidebar");
                }
            });
        });
    