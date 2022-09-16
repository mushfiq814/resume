clean:
	rm *.log *.aux *.out

compile:
	rm *.pdf; xelatex *.tex
