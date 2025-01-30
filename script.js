if (window.location.pathname.includes('second.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const photoUrl = urlParams.get('photo');
    const uploadedPhoto = document.getElementById('uploadedPhoto');

    if (photoUrl) {
        uploadedPhoto.src = photoUrl;  
    }
}

const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const photoInput = document.getElementById('photo');
        const file = photoInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const photoUrl = event.target.result;

                window.location.href = `second.html?photo=${encodeURIComponent(photoUrl)}`;
            };

            reader.readAsDataURL(file);
        }
    });
}
