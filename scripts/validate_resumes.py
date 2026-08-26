from pathlib import Path

from pypdf import PdfReader


root = Path(__file__).resolve().parents[1]
files = sorted((root / "output" / "pdf").glob("*.pdf"))
assert len(files) == 4, f"Expected four resumes, found {len(files)}"

for file in files:
    reader = PdfReader(file)
    assert len(reader.pages) == 1, f"{file.name} is not one page"
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    assert "Billy Martínez" in text, f"Name is not extractable in {file.name}"
    assert "billymartinezc@gmail.com" in text, f"Email is not extractable in {file.name}"
    assert len(text) > 1800, f"Unexpectedly little extractable text in {file.name}"
    print(f"{file.name}: 1 page, {len(text)} extractable characters")
