# Script for batch installing Visual Studio Code extensions
# Specify extensions to be checked & installed by modifying $extensions

$extensions =
    # Look & Feel
	"solarliner.linux-themes",
    # Editing
    
    # Language support
    "ms-python.python",
	"cstrap.flask-snippets",
    # Extra functionality
	"mtxr.sqltools",
	"mtxr.sqltools-driver-pg",
    "humao.rest-client",
	"coenraads.bracket-pair-colorizer-2",
		

$cmd = "code --list-extensions"
Invoke-Expression $cmd -OutVariable output | Out-Null
$installed = $output -split "\s"

foreach ($ext in $extensions) {
    if ($installed.Contains($ext)) {
        Write-Host $ext "already installed." -ForegroundColor Gray
    } else {
        Write-Host "Installing" $ext "..." -ForegroundColor White
        code --install-extension $ext
    }
}