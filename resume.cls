% Extend Article Class with paper and font size
\LoadClass[a4paper,10pt]{extarticle}

% Remove Page Numbering
\pagestyle{empty}

% Margins
\RequirePackage{geometry}
\geometry{
	top=0.5in,
	bottom=0.5in,
	left=0.5in,
	right=0.5in
}

% Fonts
% \RequirePackage[T1]{fontenc}
% \RequirePackage[utf8]{inputenc}
\RequirePackage{fontspec}
\setmainfont{SF-Pro-Display}[
	Path          =fonts/sf-pro-display/,
	UprightFont   =SF-Pro-Display-Regular.otf,
	BoldFont      =SF-Pro-Display-Black.otf,
	ItalicFont    =SF-Pro-Display-RegularItalic.otf,
	BoldItalicFont=SF-Pro-Display-BlackItalic.otf
]
% \setmainfont{OpenSans}[
% 	Path          =fonts/Open_Sans/,
% 	UprightFont   =OpenSans-Regular.ttf,
% 	BoldFont      =OpenSans-ExtraBold.ttf,
% 	ItalicFont    =OpenSans-Italic.ttf,
% 	BoldItalicFont=OpenSans-ExtraBoldItalic.ttf
% ]

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

\RequirePackage{soul}

% Custom Headings and Subheadings
\RequirePackage{titlesec}
%%% \titleformat{<command>}[<shape>]{<format>}{<label>}{<sep>}{<before-code>}[<after-code>]
%%% \titlespacing{<command>}{<left>}{<before>}{<after>}[<right>]

\titleformat{\section}
	{\bfseries\LARGE\center}{}{0em}{\uppercase}
\titlespacing{\section}
	{0pt}{0pt}{0pt}

\titleformat{\subsection}
	{\bfseries}{}{0em}{\uppercase}[\titlerule]
\titlespacing*{\subsection}
	{0pt}{8pt}{6pt}

% Macros

% Links
\newcommand{\email}[1]{\href{mailto:#1}{\uppercase{#1}}}
\newcommand{\address}[1]{\uppercase{#1}}
\newcommand{\phone}[1]{#1}

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

% Subheadings
\newcommand{\schoolInfoLocationDate}[3]{
	\noindent\textbf{\uppercase{#1} | \emph{#2} \hfill \emph{#3}}
	\vspace{2mm}
}

\newcommand{\jobInfoLocationDate}[4]{
	\noindent\textbf{\uppercase{#1} @ #2 | \emph{#3} \hfill \emph{#4}}
	\vspace{2mm}
}
