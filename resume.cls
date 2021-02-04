% Extend Article Class
\LoadClass{article}

% Margins
\RequirePackage{geometry}
\geometry{
	top=0.5in,
	bottom=0.5in,
	left=0.5in,
	right=0.5in
}

% Fonts
\RequirePackage[T1]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage{helvet}

% Hyperlinks
\RequirePackage{hyperref}
\hypersetup{
	colorlinks=true,
	urlcolor=black,
	pdfborderstyle={/S/U/W 1}
}

% Lists
\RequirePackage{enumitem}
\setlist{
	leftmargin=5mm,
	topsep=2pt,
	partopsep=2pt,
	itemsep=2pt,
	parsep=2pt
}

% Headings
\RequirePackage{titlesec}
%%% \titleformat{<command>}[<shape>]{<format>}{<label>}{<sep>}{<before-code>}[<after-code>]
%%% \titlespacing{<command>}{<left>}{<before>}{<after>}[<right>]

\titleformat{\section}
	{\bfseries\Huge\scshape\sffamily\center}{}{0em}{}
\titlespacing{\section}
	{0pt}{0pt}{0pt}

\titleformat{\subsection}
	{\bfseries\large\sffamily}{}{0em}{\uppercase}[\titlerule]
\titlespacing*{\subsection}
	{0pt}{6pt}{6pt}

% Macros
\newcommand{\email}[1]{
	\href{mailto:#1}{\uppercase{#1}}
}

\newcommand{\address}[1]{
	\uppercase{#1}
}

\newcommand{\phone}[1]{
	#1
}

\newcommand{\linkedin}[1]{
	\uppercase{\textbf{LinkedIn}}: \href{https://linkedin.com/in/#1}{\uppercase{#1}}
}

\newcommand{\github}[1]{
	\uppercase{\textbf{Github}}: \href{https://github.com/#1}{\uppercase{#1}}
}

\newcommand{\website}[1]{
	\uppercase{\textbf{Website}}: \href{https://#1}{\uppercase{#1}}
}

\newcommand{\linkseparator}[0]{
	\large\textperiodcentered \ 
}

\newcommand{\infoLocationDate}[3]{
	\vspace{1mm}
	\textbf{\uppercase{#1} | \emph{#2} \hfill \emph{#3}}
}

\newcommand{\company}[1]{
	\vspace{1mm}
	\uppercase{\textbf{#1}} \\
}
