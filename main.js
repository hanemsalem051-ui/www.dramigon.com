document.getElementById('join-btn').addEventListener('click', () => {
        // Hide landing, show AI
            document.getElementById('hero').classList.add('hidden');
                document.getElementById('ai-interface').classList.remove('hidden');
                });

                document.getElementById('video-upload').addEventListener('change', async (event) => {
                    const file = event.target.files[0];
                        if (!file) return;

                            const status = document.getElementById('status');
                                const resultBox = document.getElementById('result-box');
                                    const analysisText = document.getElementById('analysis-text');

                                        status.innerText = "Uploading to Dramigon AI...";
                                            
                                                // Simulating AI Processing Time
                                                    setTimeout(() => {
                                                            status.innerText = "Scanning frames for talent signatures...";
                                                                    
                                                                            setTimeout(() => {
                                                                                        status.innerText = "Analysis Complete.";
                                                                                                    resultBox.classList.remove('hidden');
                                                                                                                
                                                                                                                            // In a real app, this data would come from your AI backend
                                                                                                                                        analysisText.innerHTML = `
                                                                                                                                                        <strong>Energy Level:</strong> 92% <br>
                                                                                                                                                                        <strong>Stage Presence:</strong> High <br>
                                                                                                                                                                                        <strong>Verdict:</strong> SQUAD MATERIAL.
                                                                                                                                                                                                    `;
                                                                                                                                                                                                            }, 3000);
                                                                                                                                                                                                                }, 2000);
                                                                                                                                                                                                                });
                                                                                                                                                                                                                
})