#!/usr/bin/env python3
"""
Script de déploiement pour le site personnel de Ria Insa
Permet de déployer facilement sur différentes plateformes
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

def create_deploy_folder():
    """Crée un dossier de déploiement avec les fichiers optimisés"""
    deploy_dir = Path("deploy")
    
    if deploy_dir.exists():
        shutil.rmtree(deploy_dir)
    
    deploy_dir.mkdir()
    
    # Copier les fichiers essentiels
    files_to_copy = ["index.html", "styles.css", "script.js", "README.md"]
    
    for file in files_to_copy:
        if Path(file).exists():
            shutil.copy2(file, deploy_dir / file)
    
    print(f"✅ Dossier de déploiement créé : {deploy_dir.absolute()}")
    return deploy_dir

def minify_css(input_file, output_file):
    """Minifie le fichier CSS"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Suppression des commentaires et espaces inutiles
        lines = content.split('\n')
        minified = []
        in_comment = False
        
        for line in lines:
            line = line.strip()
            if line.startswith('/*'):
                in_comment = True
            if not in_comment and line and not line.startswith('//'):
                minified.append(line)
            if line.endswith('*/'):
                in_comment = False
        
        minified_content = ' '.join(minified)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified_content)
        
        print(f"✅ CSS minifié : {output_file}")
        return True
    except Exception as e:
        print(f"❌ Erreur lors de la minification CSS : {e}")
        return False

def minify_js(input_file, output_file):
    """Minifie le fichier JavaScript"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Suppression des commentaires et espaces inutiles
        lines = content.split('\n')
        minified = []
        in_comment = False
        
        for line in lines:
            stripped = line.strip()
            if stripped.startswith('/*'):
                in_comment = True
            if not in_comment and stripped and not stripped.startswith('//'):
                minified.append(stripped)
            if stripped.endswith('*/'):
                in_comment = False
        
        minified_content = ' '.join(minified)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified_content)
        
        print(f"✅ JavaScript minifié : {output_file}")
        return True
    except Exception as e:
        print(f"❌ Erreur lors de la minification JS : {e}")
        return False

def create_netlify_files(deploy_dir):
    """Crée les fichiers nécessaires pour Netlify"""
    # Fichier _redirects pour le routing SPA
    with open(deploy_dir / "_redirects", "w") as f:
        f.write("/*    /index.html   200\n")
    
    # Fichier netlify.toml
    netlify_config = """[build]
  publish = "deploy"
  
[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
"""
    
    with open(deploy_dir / "netlify.toml", "w") as f:
        f.write(netlify_config)
    
    print("✅ Fichiers Netlify créés")

def create_vercel_files(deploy_dir):
    """Crée les fichiers nécessaires pour Vercel"""
    vercel_config = """{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}"""
    
    with open(deploy_dir / "vercel.json", "w") as f:
        f.write(vercel_config)
    
    print("✅ Fichiers Vercel créés")

def create_github_pages_files(deploy_dir):
    """Crée les fichiers nécessaires pour GitHub Pages"""
    # Créer un dossier docs et y déplacer les fichiers
    docs_dir = deploy_dir / "docs"
    docs_dir.mkdir()
    
    files_to_move = ["index.html", "styles.css", "script.js"]
    for file in files_to_move:
        if (deploy_dir / file).exists():
            shutil.move(deploy_dir / file, docs_dir / file)
    
    print("✅ Fichiers GitHub Pages créés")

def main():
    """Fonction principale"""
    print("🚀 Déploiement du site personnel de Ria Insa")
    print("=" * 50)
    
    # Créer le dossier de déploiement
    deploy_dir = create_deploy_folder()
    
    # Minifier les fichiers CSS et JS
    css_minified = minify_css("styles.css", deploy_dir / "styles.min.css")
    js_minified = minify_js("script.js", deploy_dir / "script.min.js")
    
    if css_minified and js_minified:
        # Mettre à jour le HTML pour utiliser les fichiers minifiés
        with open(deploy_dir / "index.html", "r", encoding="utf-8") as f:
            html_content = f.read()
        
        html_content = html_content.replace('styles.css', 'styles.min.css')
        html_content = html_content.replace('script.js', 'script.min.js')
        
        with open(deploy_dir / "index.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        
        print("✅ HTML mis à jour avec les fichiers minifiés")
    
    # Créer les fichiers pour différentes plateformes
    print("\n📦 Création des fichiers de configuration...")
    create_netlify_files(deploy_dir)
    create_vercel_files(deploy_dir)
    create_github_pages_files(deploy_dir)
    
    # Instructions de déploiement
    print("\n" + "=" * 50)
    print("🎉 Site prêt pour le déploiement !")
    print("\n📋 Instructions de déploiement :")
    print("\n1. Netlify :")
    print("   - Glisser-déposer le dossier 'deploy' sur https://app.netlify.com/drop")
    print("   - Ou connecter votre repo Git et configurer le dossier 'deploy'")
    
    print("\n2. Vercel :")
    print("   - Installer Vercel CLI : npm i -g vercel")
    print("   - Exécuter : vercel --prod")
    
    print("\n3. GitHub Pages :")
    print("   - Pousser le code sur GitHub")
    print("   - Activer GitHub Pages dans les settings du repo")
    print("   - Choisir la branche 'main' et le dossier '/docs'")
    
    print("\n4. Serveur local (test) :")
    print("   - python -m http.server 8000")
    print("   - Accéder à http://localhost:8000")
    
    print(f"\n📁 Dossier de déploiement : {deploy_dir.absolute()}")
    print("=" * 50)

if __name__ == "__main__":
    main()
