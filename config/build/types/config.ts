export type BuildMode = 'development' | 'production';


export interface BuildPath {
	entry: string;
	build: string;
	html: string;
}

export interface BuildOption {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean
}
