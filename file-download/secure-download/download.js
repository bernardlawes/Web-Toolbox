    const token = this.dataset.token;

    const url = `download.php?token=${encodeURIComponent(token)}&target=${encodeURIComponent(target)}`;

    document.getElementById('downloadBtn').addEventListener('click', function () {

      fetch(url) // just a static file
        .then(response => response.blob())
        .then(blob => {
          //const url = URL.createObjectURL(blob);
          const forcedBlob = new Blob([originalBlob], { type: 'application/octet-stream' }); // 👈 override MIME
          const url = URL.createObjectURL(forcedBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        });
        
    });