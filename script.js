// ==================== STATE ====================
let currentLang = localStorage.getItem('phonevs_lang') || 'ru';
let currentTheme = localStorage.getItem('phonevs_theme') || 'dark';
let favorites = JSON.parse(localStorage.getItem('phonevs_favorites') || '[]');
let history = JSON.parse(localStorage.getItem('phonevs_history') || '[]');
let currentWallpaper = localStorage.getItem('phonevs_wallpaper') || '';
let currentBrandFilter = 'all';
let currentCategoryFilter = 'all';
let currentCondition = 'excellent';
let selectedSizePhones =[];
let currentGenSeries = null;
let currentHeatmapFilter = 'all';



// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', init);

function init() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeBtn();
    updateLangBtn();
    applyTranslations();
    applyWallpaper();
    updateStats();
    
    renderBrandFilters();
    renderCategoryFilters();
    renderQuickCompare();
    populateSelects();
    renderHistory();
    updateFavCount();
    
    // Trade-In
    populateTradeinSelects();
    
    // Heatmap
    renderHeatmapFilters();
    renderHeatmap();
    
    // Sizes
    renderSizePhonesList();
    
    // Generations
    renderGenSeriesSelector();
    
    // Set default values
    document.getElementById('phone1').value = 'iphone16promax';
    document.getElementById('phone2').value = 's25ultra';
    updatePreview(1);
    updatePreview(2);
    
    // Search
    document.getElementById('searchInput').addEventListener('input', handleSearch);
}

// ===== УПРАВЛЕНИЕ ОБОЯМИ =====
function showWallpaperModal() {
    document.getElementById('wallpaperUrlInput').value = currentWallpaper;
    renderWallpaperPresets();
    document.getElementById('wallpaperModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeWallpaperModal() {
    document.getElementById('wallpaperModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function applyCustomWallpaper() {
    const url = document.getElementById('wallpaperUrlInput').value.trim();
    if (url) {
        setWallpaper(url);
        showToast('🖼️ ' + t('wallpaperApplied'), 'success');
    } else {
        clearWallpaper();
    }
}

function setWallpaper(url) {
    currentWallpaper = url;
    localStorage.setItem('phonevs_wallpaper', url);
    document.getElementById('wallpaperUrlInput').value = url;
    applyWallpaper();
    renderWallpaperPresets();
}

function clearWallpaper() {
    currentWallpaper = '';
    localStorage.removeItem('phonevs_wallpaper');
    document.getElementById('wallpaperUrlInput').value = '';
    applyWallpaper();
    renderWallpaperPresets();
    showToast('🗑️ ' + t('wallpaperRemoved'));
}

function applyWallpaper() {
    if (currentWallpaper) {
        document.body.style.setProperty('--custom-wallpaper', `url('${currentWallpaper}')`);
        document.body.classList.add('has-wallpaper');
    } else {
        document.body.style.removeProperty('--custom-wallpaper');
        document.body.classList.remove('has-wallpaper');
    }
}

function renderWallpaperPresets() {
    const container = document.getElementById('wallpaperPresets');
    if (!container) return;
    
    container.innerHTML = wallpaperPresets.map(url => `
        <div class="preset-item ${currentWallpaper === url ? 'active' : ''}" 
             style="background-image: url('${url}')" 
             onclick="setWallpaper('${url}')">
        </div>
    `).join('');
}
// =============================

function updateStats() {
    document.getElementById('statPhones').textContent = phones.length;
    const totalSpecs = specCategories.reduce((sum, cat) => sum + cat.specs.length, 0);
    document.getElementById('statSpecs').textContent = totalSpecs;
    const brands =[...new Set(phones.map(p => p.brand))];
    document.getElementById('statBrands').textContent = brands.length;
}

// ==================== THEME & LANGUAGE ====================
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('phonevs_theme', currentTheme);
    updateThemeBtn();
}

function updateThemeBtn() {
    document.getElementById('themeBtn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

function toggleLang() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('phonevs_lang', currentLang);
    
    // Добавляем класс для эффекта затухания
    document.body.classList.add('lang-switching');
    
    // Ждём пока произойдёт анимация исчезновения, затем меняем текст
    setTimeout(() => {
        updateLangBtn();
        applyTranslations();
        
        // Перерисовываем компоненты для обновления языка в них
        renderBrandFilters();
        renderCategoryFilters();
        
        const currentSearch = document.getElementById('searchInput').value;
        populateSelects(currentSearch);
        
        renderQuickCompare();
        renderHistory();
        updateFavCount();
        renderFavoritesPanel();
        
        populateTradeinSelects();
        updateTradein();
        
        renderHeatmapFilters();
        renderHeatmap();
        
        renderSizePhonesList();
        renderSizeVisual();
        
        renderGenSeriesSelector();
        renderGenTimeline();
        
        if (document.getElementById('comparisonResults').classList.contains('active')) {
            compare();
        }
        
        // Убираем класс для появления с новым текстом
        document.body.classList.remove('lang-switching');
    }, 300);
}

function updateLangBtn() {
    document.getElementById('langBtn').textContent = currentLang.toUpperCase();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ==================== MAIN PANELS ====================
function showMainPanel(panelId) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
    
    document.getElementById('panel-' + panelId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// ==================== FILTERS ====================
function renderBrandFilters() {
    const brands =[...new Set(phones.map(p => p.brand))];
    const container = document.getElementById('brandFilters');
    
    container.innerHTML = `
        <button class="filter-chip ${currentBrandFilter === 'all' ? 'active' : ''}" onclick="filterByBrand('all')">
            🌐 ${t('allBrands')}
        </button>
        ${brands.map(brand => {
            const phone = phones.find(p => p.brand === brand);
            return `<button class="filter-chip ${currentBrandFilter === brand ? 'active' : ''}" onclick="filterByBrand('${brand}')">
                ${phone.emoji} ${brand}
            </button>`;
        }).join('')}
    `;
}

function filterByBrand(brand) {
    currentBrandFilter = brand;
    renderBrandFilters();
    populateSelects();
}

function renderCategoryFilters() {
    const categories =[
        { id: 'all', icon: '📱', name: t('all') },
        { id: 'flagship', icon: '🏆', name: t('flagships') },
        { id: 'midrange', icon: '⚡', name: t('midrange') },
        { id: 'foldable', icon: '📂', name: t('foldable') },
        { id: 'gaming', icon: '🎮', name: t('gaming') }
    ];
    
    document.getElementById('categoryFilters').innerHTML = categories.map(cat => `
        <button class="filter-chip ${currentCategoryFilter === cat.id ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
}

function filterByCategory(category) {
    currentCategoryFilter = category;
    renderCategoryFilters();
    populateSelects();
}

// ==================== SELECTS ====================
function populateSelects(searchQuery = '') {
    const select1 = document.getElementById('phone1');
    const select2 = document.getElementById('phone2');
    const val1 = select1.value;
    const val2 = select2.value;
    
    let filtered = phones;
    
    if (currentBrandFilter !== 'all') {
        filtered = filtered.filter(p => p.brand === currentBrandFilter);
    }
    if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategoryFilter);
    }
    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    const optHtml = filtered.map(p => 
        `<option value="${p.id}">${p.emoji} ${p.brand} ${p.name}</option>`
    ).join('');
    
    select1.innerHTML = `<option value="">— ${t('phone1')} —</option>` + optHtml;
    select2.innerHTML = `<option value="">— ${t('phone2')} —</option>` + optHtml;
    
    if (filtered.find(p => p.id === val1)) select1.value = val1;
    if (filtered.find(p => p.id === val2)) select2.value = val2;
    
    updatePreview(1);
    updatePreview(2);
}

function handleSearch(e) {
    populateSelects(e.target.value);
}

function updatePreview(num) {
    const select = document.getElementById('phone' + num);
    const preview = document.getElementById('preview' + num);
    const phone = phones.find(p => p.id === select.value);
    
    if (phone) {
        preview.innerHTML = `
            <div class="phone-preview-content">
                <span class="phone-preview-emoji">${phone.emoji}</span>
                <div class="phone-preview-info">
                    <h4>${phone.name}</h4>
                    <span>${phone.brand} • ${phone.year}</span>
                </div>
                <span class="phone-preview-price">${phone.specs.priceStr}</span>
            </div>
        `;
        preview.classList.add('active');
    } else {
        preview.classList.remove('active');
    }
    
    updateFavBtns();
}

// ==================== QUICK COMPARE ====================
function renderQuickCompare() {
    document.getElementById('quickCompareGrid').innerHTML = quickPresets.map(preset => {
        const p1 = phones.find(p => p.id === preset.p1);
        const p2 = phones.find(p => p.id === preset.p2);
        if (!p1 || !p2) return '';
        
        return `
            <div class="quick-compare-card" onclick="selectPreset('${preset.p1}', '${preset.p2}')">
                <div class="phones">
                    <span>${p1.emoji} ${p1.name}</span>
                    <span class="vs">VS</span>
                    <span>${p2.emoji} ${p2.name}</span>
                </div>
                <span class="tag">${preset.tag}</span>
            </div>
        `;
    }).join('');
}

function selectPreset(p1Id, p2Id) {
    currentBrandFilter = 'all';
    currentCategoryFilter = 'all';
    renderBrandFilters();
    renderCategoryFilters();
    populateSelects();
    
    document.getElementById('phone1').value = p1Id;
    document.getElementById('phone2').value = p2Id;
    updatePreview(1);
    updatePreview(2);
    compare();
}

// ==================== COMPARISON ====================
function compare() {
    const id1 = document.getElementById('phone1').value;
    const id2 = document.getElementById('phone2').value;
    
    if (!id1 || !id2) {
        showToast('⚠️ ' + t('selectBoth'), 'error');
        return;
    }
    if (id1 === id2) {
        showToast('⚠️ ' + t('selectDiff'), 'error');
        return;
    }
    
    const p1 = phones.find(p => p.id === id1);
    const p2 = phones.find(p => p.id === id2);
    
    addToHistory(p1, p2);
    
    document.getElementById('noSelection').style.display = 'none';
    const container = document.getElementById('comparisonResults');
    
    // Calculate scores
    let score1 = 0, score2 = 0, totalCompared = 0;
    const catScores = {};
    
    specCategories.forEach(cat => {
        catScores[cat.id] = { s1: 0, s2: 0, total: 0 };
        cat.specs.forEach(spec => {
            if (spec.compare) {
                const v1 = p1.specs[spec.compare];
                const v2 = p2.specs[spec.compare];
                if (v1 !== undefined && v2 !== undefined && v1 !== v2) {
                    totalCompared++;
                    catScores[cat.id].total++;
                    if (spec.higher) {
                        if (v1 > v2) { score1++; catScores[cat.id].s1++; }
                        else { score2++; catScores[cat.id].s2++; }
                    } else {
                        if (v1 < v2) { score1++; catScores[cat.id].s1++; }
                        else { score2++; catScores[cat.id].s2++; }
                    }
                }
            }
        });
    });
    
    const winner = score1 > score2 ? 1 : (score2 > score1 ? 2 : 0);
    const winnerPhone = winner === 1 ? p1 : (winner === 2 ? p2 : null);
    
    // Generate pros
    const pros1 = [], pros2 =[];
    specCategories.forEach(cat => {
        cat.specs.forEach(spec => {
            if (spec.compare) {
                const v1 = p1.specs[spec.compare];
                const v2 = p2.specs[spec.compare];
                if (v1 !== undefined && v2 !== undefined && v1 !== v2) {
                    const label = spec.label[currentLang];
                    if (spec.higher) {
                        if (v1 > v2) pros1.push(label);
                        else pros2.push(label);
                    } else {
                        if (v1 < v2) pros1.push(label);
                        else pros2.push(label);
                    }
                }
            }
        });
    });
    
    // Build specs HTML
    let specsHtml = '';
    specCategories.forEach(cat => {
        specsHtml += `
            <div class="spec-category-group">
                <div class="spec-category-header" onclick="toggleSpecCategory(this)">
                    <div class="spec-category-title">
                        <span>${cat.icon}</span>
                        <span>${cat.name[currentLang]}</span>
                        <span class="toggle">▼</span>
                    </div>
                </div>
                <div class="spec-category-content">
        `;
        
        cat.specs.forEach(spec => {
            let class1 = '', class2 = '';
            let bar1 = 0, bar2 = 0;
            let val1 = p1.specs[spec.key];
            let val2 = p2.specs[spec.key];
            
            // Format values
            if (spec.format === 'bool') {
                val1 = val1 ? '✓' : '✗';
                val2 = val2 ? '✓' : '✗';
            } else if (spec.format === 'antutu') {
                val1 = val1 ? (val1 / 1000000).toFixed(1) + 'M' : '—';
                val2 = val2 ? (val2 / 1000000).toFixed(1) + 'M' : '—';
            } else {
                if (spec.prefix) { val1 = spec.prefix + val1; val2 = spec.prefix + val2; }
                if (spec.suffix) { val1 = val1 + spec.suffix; val2 = val2 + spec.suffix; }
            }
            
            if (spec.compare) {
                const cv1 = p1.specs[spec.compare];
                const cv2 = p2.specs[spec.compare];
                const maxVal = Math.max(cv1 || 0, cv2 || 0);
                
                if (cv1 && cv2 && cv1 !== cv2) {
                    if (spec.higher) {
                        class1 = cv1 > cv2 ? 'winner' : 'loser';
                        class2 = cv2 > cv1 ? 'winner' : 'loser';
                    } else {
                        class1 = cv1 < cv2 ? 'winner' : 'loser';
                        class2 = cv2 < cv1 ? 'winner' : 'loser';
                    }
                }
                
                if (maxVal > 0) {
                    bar1 = (cv1 / maxVal) * 100;
                    bar2 = (cv2 / maxVal) * 100;
                }
            }
            
            specsHtml += `
                <div class="spec-row">
                    <div class="spec-label">
                        <span class="icon">${spec.icon}</span>
                        ${spec.label[currentLang]}
                    </div>
                    <div class="spec-value ${class1}">
                        ${val1 || '—'}
                        ${spec.compare && bar1 ? `<div class="bar"><div class="bar-fill" style="width:${bar1}%"></div></div>` : ''}
                    </div>
                    <div class="spec-value ${class2}">
                        ${val2 || '—'}
                        ${spec.compare && bar2 ? `<div class="bar"><div class="bar-fill" style="width:${bar2}%"></div></div>` : ''}
                    </div>
                </div>
            `;
        });
        
        specsHtml += '</div></div>';
    });
    
    // Category scores HTML
    let catScoresHtml = specCategories.filter(c => catScores[c.id].total > 0).map(cat => {
        const cs = catScores[cat.id];
        return `
            <div class="cat-score-card">
                <div class="icon">${cat.icon}</div>
                <h5>${cat.name[currentLang]}</h5>
                <div class="scores">
                    <span class="score p1 ${cs.s1 > cs.s2 ? 'win' : ''}">${cs.s1}</span>
                    <span class="score p2 ${cs.s2 > cs.s1 ? 'win' : ''}">${cs.s2}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // Verdict text
    let verdictText;
    if (winner === 1) {
        verdictText = `<strong>${p1.name}</strong> ${t('wins')} <strong>${score1}</strong> ${t('outOf')} <strong>${totalCompared}</strong> ${t('categories')}!`;
    } else if (winner === 2) {
        verdictText = `<strong>${p2.name}</strong> ${t('wins')} <strong>${score2}</strong> ${t('outOf')} <strong>${totalCompared}</strong> ${t('categories')}!`;
    } else {
        verdictText = `🤝 ${t('draw')}!`;
    }
    
    container.innerHTML = `
        ${winner ? `
        <div class="winner-banner">
            <div class="winner-info">
                <span class="winner-trophy">🏆</span>
                <div class="winner-text">
                    <h3>${t('winner')}: ${winnerPhone.name}</h3>
                    <p>${winnerPhone.brand} • ${winnerPhone.specs.priceStr}</p>
                </div>
            </div>
            <div class="winner-scores">
                <div class="winner-score ${winner === 1 ? 'highlight' : ''}">
                    <h4>${p1.name}</h4>
                    <div class="score">${score1}</div>
                </div>
                <div class="winner-score ${winner === 2 ? 'highlight' : ''}">
                    <h4>${p2.name}</h4>
                    <div class="score">${score2}</div>
                </div>
            </div>
        </div>
        ` : ''}
        
        <div class="phones-header">
            <div class="phones-header-label">
                <span class="icon">⚙️</span>
                <span>${currentLang === 'ru' ? 'Характеристики' : 'Specs'}</span>
            </div>
            <div class="phone-header-card ${winner === 1 ? 'winner' : ''}" onclick="showPhoneModalById('${p1.id}')">
                <div class="emoji">${p1.emoji}</div>
                <h2>${p1.name}</h2>
                <div class="brand">${p1.brand} • ${p1.year}</div>
                <div class="price-badge">${p1.specs.priceStr}</div>
            </div>
            <div class="phone-header-card ${winner === 2 ? 'winner' : ''}" onclick="showPhoneModalById('${p2.id}')">
                <div class="emoji">${p2.emoji}</div>
                <h2>${p2.name}</h2>
                <div class="brand">${p2.brand} • ${p2.year}</div>
                <div class="price-badge">${p2.specs.priceStr}</div>
            </div>
        </div>
        
        <div class="specs-table">
            ${specsHtml}
        </div>
        
        <div class="verdict-section">
            <div class="verdict-header">
                <h3>📊 ${currentLang === 'ru' ? 'Результаты' : 'Results'}</h3>
                <p>${verdictText}</p>
            </div>
            
            <div class="category-scores">${catScoresHtml}</div>
            
            <div class="pros-cons-grid">
                <div class="pros-cons-card">
                    <h4>${p1.emoji} ${p1.name}</h4>
                    <ul class="pros-cons-list pros">
                        ${pros1.slice(0, 6).map(p => `<li><span class="icon">✓</span>${p}</li>`).join('') || '<li>—</li>'}
                    </ul>
                </div>
                <div class="pros-cons-card">
                    <h4>${p2.emoji} ${p2.name}</h4>
                    <ul class="pros-cons-list pros">
                        ${pros2.slice(0, 6).map(p => `<li><span class="icon">✓</span>${p}</li>`).join('') || '<li>—</li>'}
                    </ul>
                </div>
            </div>
            
            <div class="result-actions">
                <button class="result-btn" onclick="copyResult('${p1.name}', '${p2.name}', ${score1}, ${score2})">📋 ${currentLang === 'ru' ? 'Копировать' : 'Copy'}</button>
                <button class="result-btn" onclick="window.print()">🖨️ ${currentLang === 'ru' ? 'Печать' : 'Print'}</button>
            </div>
        </div>
    `;
    
    container.classList.add('active');
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleSpecCategory(header) {
    header.querySelector('.spec-category-title').classList.toggle('collapsed');
    header.nextElementSibling.classList.toggle('collapsed');
}

// ==================== HISTORY ====================
function addToHistory(p1, p2) {
    const item = {
        id: Date.now(),
        phone1: p1.id,
        phone2: p2.id,
        date: new Date().toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US')
    };
    
    history = history.filter(h => !(h.phone1 === p1.id && h.phone2 === p2.id));
    history.unshift(item);
    history = history.slice(0, 15);
    
    localStorage.setItem('phonevs_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const section = document.getElementById('historySection');
    const list = document.getElementById('historyList');
    
    if (history.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    list.innerHTML = history.map(item => {
        const p1 = phones.find(p => p.id === item.phone1);
        const p2 = phones.find(p => p.id === item.phone2);
        if (!p1 || !p2) return '';
        
        return `
            <div class="history-item" onclick="selectPreset('${p1.id}', '${p2.id}')">
                <div class="history-phones">
                    <span>${p1.emoji} ${p1.name}</span>
                    <span class="history-vs">VS</span>
                    <span>${p2.emoji} ${p2.name}</span>
                </div>
                <div class="history-meta">
                    <span class="history-date">${item.date}</span>
                    <button class="history-delete" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})">✕</button>
                </div>
            </div>
        `;
    }).join('');
}

function deleteHistoryItem(id) {
    history = history.filter(h => h.id !== id);
    localStorage.setItem('phonevs_history', JSON.stringify(history));
    renderHistory();
}

function clearHistory() {
    history =[];
    localStorage.setItem('phonevs_history', JSON.stringify(history));
    renderHistory();
    showToast('🗑️ ' + (currentLang === 'ru' ? 'История очищена' : 'History cleared'));
}

// ==================== FAVORITES ====================
function toggleFavorites() {
    const panel = document.getElementById('favoritesPanel');
    const overlay = document.getElementById('overlay');
    panel.classList.toggle('open');
    overlay.classList.toggle('active');
    renderFavoritesPanel();
}

function renderFavoritesPanel() {
    const content = document.getElementById('favoritesContent');
    
    if (favorites.length === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="icon">💔</div>
                <p>${t('noFavorites')}</p>
            </div>
        `;
        return;
    }
    
    content.innerHTML = favorites.map(id => {
        const phone = phones.find(p => p.id === id);
        if (!phone) return '';
        return `
            <div class="fav-item" onclick="selectPhoneFromFav('${id}')">
                <span class="emoji">${phone.emoji}</span>
                <div class="fav-item-info">
                    <h4>${phone.name}</h4>
                    <span>${phone.brand} • ${phone.specs.priceStr}</span>
                </div>
                <button class="fav-item-remove" onclick="event.stopPropagation(); removeFavorite('${id}')">✕</button>
            </div>
        `;
    }).join('');
}

function selectPhoneFromFav(id) {
    const select1 = document.getElementById('phone1');
    const select2 = document.getElementById('phone2');
    
    if (!select1.value) {
        select1.value = id;
        updatePreview(1);
    } else if (!select2.value) {
        select2.value = id;
        updatePreview(2);
    } else {
        select1.value = id;
        updatePreview(1);
    }
    toggleFavorites();
}

function toggleFavPhone(num) {
    const select = document.getElementById('phone' + num);
    const id = select.value;
    if (!id) return;
    
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('💔 ' + t('removedFav'));
    } else {
        favorites.push(id);
        showToast('❤️ ' + t('addedFav'), 'success');
    }
    
    localStorage.setItem('phonevs_favorites', JSON.stringify(favorites));
    updateFavCount();
    updateFavBtns();
}

function removeFavorite(id) {
    favorites = favorites.filter(f => f !== id);
    localStorage.setItem('phonevs_favorites', JSON.stringify(favorites));
    updateFavCount();
    updateFavBtns();
    renderFavoritesPanel();
}

function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

function updateFavBtns() {
    const id1 = document.getElementById('phone1').value;
    const id2 = document.getElementById('phone2').value;
    
    const btn1 = document.getElementById('favBtn1');
    const btn2 = document.getElementById('favBtn2');
    
    btn1.textContent = favorites.includes(id1) ? '❤️' : '🤍';
    btn2.textContent = favorites.includes(id2) ? '❤️' : '🤍';
    
    btn1.classList.toggle('active', favorites.includes(id1));
    btn2.classList.toggle('active', favorites.includes(id2));
}

// ==================== MODALS ====================

// Эта функция берет ID выбранного телефона и передает его дальше
function showPhoneModal(num) {
    const id = document.getElementById('phone' + num).value;
    if (id) showPhoneModalById(id);
}

function showPhoneModalById(id) {
    const phone = phones.find(p => p.id === id);
    if (!phone) return;
    
    const modal = document.getElementById('phoneModal');
    const overlay = document.getElementById('overlay');
    
    const specsToShow =[
        { icon: '📺', label: currentLang === 'ru' ? 'Экран' : 'Screen', value: phone.specs.screenType },
        { icon: '⚡', label: currentLang === 'ru' ? 'Процессор' : 'Processor', value: phone.specs.processor },
        { icon: '🧠', label: currentLang === 'ru' ? 'ОЗУ' : 'RAM', value: phone.specs.ram + ' ГБ' },
        { icon: '💾', label: currentLang === 'ru' ? 'Память' : 'Storage', value: phone.specs.storage },
        { icon: '📷', label: currentLang === 'ru' ? 'Камера' : 'Camera', value: phone.specs.mainCamera },
        { icon: '🤳', label: currentLang === 'ru' ? 'Селфи' : 'Selfie', value: phone.specs.frontCameraStr },
        { icon: '🔋', label: currentLang === 'ru' ? 'Батарея' : 'Battery', value: phone.specs.battery + ' мАч' },
        { icon: '🔌', label: currentLang === 'ru' ? 'Зарядка' : 'Charging', value: phone.specs.charging + ' Вт' },
        { icon: '📶', label: currentLang === 'ru' ? 'Беспроводная' : 'Wireless', value: phone.specs.chargingWireless ? phone.specs.chargingWireless + ' Вт' : '✗' },
        { icon: '⚖️', label: currentLang === 'ru' ? 'Вес' : 'Weight', value: phone.specs.weight + ' г' },
        { icon: '📐', label: currentLang === 'ru' ? 'Размеры' : 'Dimensions', value: `${phone.specs.height}×${phone.specs.width}×${phone.specs.thickness} мм` },
        { icon: '💧', label: currentLang === 'ru' ? 'Защита' : 'Protection', value: phone.specs.waterproof },
        { icon: '📱', label: currentLang === 'ru' ? 'ОС' : 'OS', value: phone.specs.os },
        { icon: '🔗', label: 'USB', value: phone.specs.usb },
        { icon: '📶', label: 'Wi-Fi', value: 'Wi-Fi ' + phone.specs.wifi },
        { icon: '🔵', label: 'Bluetooth', value: phone.specs.bluetooth }
    ];

    
    
    document.getElementById('modalBody').innerHTML = `
        <div class="phone-detail-hero">
            <div class="emoji">${phone.emoji}</div>
            <h2>${phone.name}</h2>
            <div class="brand">${phone.brand} • ${phone.year} • ${phone.category}</div>
            <div class="price">${phone.specs.priceStr}</div>
            
            ${phone.specs.buyLink ? `
                <div style="margin-top: 20px;">
                    <a href="${phone.specs.buyLink}" target="_blank" class="btn btn-primary" style="display: inline-block; text-decoration: none; padding: 12px 30px; font-size: 1.1rem;">
                        🛒 ${currentLang === 'ru' ? 'Купить' : 'Buy Now'}
                    </a>
                </div>
            ` : ''}
            
        </div>
        <div class="detail-specs-grid">
            ${specsToShow.map(spec => `
                <div class="detail-spec-card">
                    <div class="icon">${spec.icon}</div>
                    <div class="label">${spec.label}</div>
                    <div class="value">${spec.value}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    document.getElementById('phoneModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function closeAllPanels() {
    document.getElementById('phoneModal').classList.remove('active');
    document.getElementById('wallpaperModal').classList.remove('active');
    document.getElementById('favoritesPanel').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// ==================== UTILITIES ====================
function swapPhones() {
    const s1 = document.getElementById('phone1');
    const s2 = document.getElementById('phone2');[s1.value, s2.value] = [s2.value, s1.value];
    updatePreview(1);
    updatePreview(2);
}

function randomPhone(num) {
    const select = document.getElementById('phone' + num);
    const options = [...select.options].filter(o => o.value).map(o => o.value);
    const otherId = document.getElementById('phone' + (num === 1 ? 2 : 1)).value;
    const available = options.filter(id => id !== otherId);
    
    if (available.length) {
        select.value = available[Math.floor(Math.random() * available.length)];
        updatePreview(num);
    }
}

function randomCompare() {
    randomPhone(1);
    randomPhone(2);
    compare();
}

function clearComparison() {
    document.getElementById('phone1').value = '';
    document.getElementById('phone2').value = '';
    document.getElementById('preview1').classList.remove('active');
    document.getElementById('preview2').classList.remove('active');
    document.getElementById('comparisonResults').classList.remove('active');
    document.getElementById('comparisonResults').innerHTML = '';
    document.getElementById('noSelection').style.display = 'block';
    updateFavBtns();
}

function copyResult(name1, name2, score1, score2) {
    const winner = score1 > score2 ? name1 : (score2 > score1 ? name2 : 'Ничья');
    const text = `📱 PhoneVS Ultimate\n\n${name1} vs ${name2}\n🏆 ${t('winner')}: ${winner}\n📊 ${t('score')}: ${score1} : ${score2}\n\n🔗 phonevs.pro`;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ ' + t('copied'), 'success');
    });
}

function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== TRADE-IN CALCULATOR ====================
function populateTradeinSelects() {
    const currentSelect = document.getElementById('tradeinCurrent');
    const newSelect = document.getElementById('tradeinNew');
    
    const sortedPhones = [...phones].sort((a, b) => b.year - a.year);
    
    const optionsHtml = sortedPhones.map(p => 
        `<option value="${p.id}">${p.emoji} ${p.name} (${p.year})</option>`
    ).join('');
    
    currentSelect.innerHTML = `<option value="">${t('selectPhone')}...</option>` + optionsHtml;
    newSelect.innerHTML = `<option value="">${t('selectPhone')}...</option>` + optionsHtml;
}

function setCondition(condition) {
    currentCondition = condition;
    document.querySelectorAll('.condition-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cond === condition);
    });
    updateTradein();
}

function updateTradein() {
    const currentId = document.getElementById('tradeinCurrent').value;
    const newId = document.getElementById('tradeinNew').value;
    
    const currentPhone = phones.find(p => p.id === currentId);
    const newPhone = phones.find(p => p.id === newId);
    
    // Update previews
    const currentPreview = document.getElementById('tradeinCurrentPreview');
    const newPreview = document.getElementById('tradeinNewPreview');
    
    if (currentPhone) {
        currentPreview.innerHTML = `
            <div class="emoji">${currentPhone.emoji}</div>
            <div class="name">${currentPhone.name}</div>
            <div class="year">${currentPhone.brand} • ${currentPhone.year}</div>
            <div class="price">${currentPhone.specs.priceStr}</div>
        `;
    } else {
        currentPreview.innerHTML = `
            <div class="emoji">📱</div>
            <div class="name">${t('selectPhone')}</div>
        `;
    }
    
    if (newPhone) {
        newPreview.innerHTML = `
            <div class="emoji">${newPhone.emoji}</div>
            <div class="name">${newPhone.name}</div>
            <div class="year">${newPhone.brand} • ${newPhone.year}</div>
            <div class="price">${newPhone.specs.priceStr}</div>
        `;
    } else {
        newPreview.innerHTML = `
            <div class="emoji">🆕</div>
            <div class="name">${t('selectPhone')}</div>
        `;
    }
    
    // Calculate trade-in
    if (currentPhone && newPhone) {
        const yearCoeff = depreciationByYear[currentPhone.year] || 0.20;
        const conditionCoeff = tradeinCoeffs[currentCondition];
        const tradeinValue = Math.round(currentPhone.specs.price * yearCoeff * conditionCoeff);
        const toPay = Math.max(0, newPhone.specs.price - tradeinValue);
        
        document.getElementById('tradeinValue').textContent = tradeinValue.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('tradeinNewPrice').textContent = newPhone.specs.price.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('tradeinToPay').textContent = toPay.toLocaleString('ru-RU') + ' ₽';
        document.getElementById('tradeinSavings').innerHTML = `💵 ${currentLang === 'ru' ? 'Экономия' : 'Savings'}: ${tradeinValue.toLocaleString('ru-RU')} ₽`;
        
        document.getElementById('tradeinResult').style.display = 'block';
    } else {
        document.getElementById('tradeinResult').style.display = 'none';
    }
}

// ==================== HEATMAP ====================
function renderHeatmapFilters() {
    const filters =[
        { id: 'all', name: currentLang === 'ru' ? 'Все' : 'All' },
        { id: 'flagship', name: currentLang === 'ru' ? 'Флагманы' : 'Flagships' },
        { id: 'midrange', name: currentLang === 'ru' ? 'Средний класс' : 'Midrange' }
    ];
    
    document.getElementById('heatmapFilters').innerHTML = filters.map(f => `
        <button class="filter-chip ${currentHeatmapFilter === f.id ? 'active' : ''}" onclick="filterHeatmap('${f.id}')">
            ${f.name}
        </button>
    `).join('');
}

function filterHeatmap(filter) {
    currentHeatmapFilter = filter;
    renderHeatmapFilters();
    renderHeatmap();
}

function renderHeatmap() {
    const tbody = document.getElementById('heatmapBody');
    
    let filtered = currentHeatmapFilter === 'all' 
        ? phones 
        : phones.filter(p => p.category === currentHeatmapFilter);
    
    filtered = filtered.sort((a, b) => b.specs.processorScore - a.specs.processorScore);
    
    const metrics = {
        camera: { values: filtered.map(p => p.specs.cameraScore), higher: true },
        cpu: { values: filtered.map(p => p.specs.processorScore), higher: true },
        ram: { values: filtered.map(p => p.specs.ram), higher: true },
        battery: { values: filtered.map(p => p.specs.battery), higher: true },
        charging: { values: filtered.map(p => p.specs.charging), higher: true },
        screen: { values: filtered.map(p => p.specs.screenSize), higher: true },
        price: { values: filtered.map(p => p.specs.price), higher: false }
    };
    
    Object.keys(metrics).forEach(key => {
        metrics[key].min = Math.min(...metrics[key].values);
        metrics[key].max = Math.max(...metrics[key].values);
    });
    
    function getHeatClass(value, metricKey) {
        const m = metrics[metricKey];
        const range = m.max - m.min;
        if (range === 0) return 'heat-3';
        
        let normalized = (value - m.min) / range;
        if (!m.higher) normalized = 1 - normalized;
        
        if (normalized >= 0.8) return 'heat-1';
        if (normalized >= 0.6) return 'heat-2';
        if (normalized >= 0.4) return 'heat-3';
        if (normalized >= 0.2) return 'heat-4';
        return 'heat-5';
    }
    
    tbody.innerHTML = filtered.map(phone => `
        <tr>
            <td>
                <div class="heatmap-phone-cell">
                    <span class="emoji">${phone.emoji}</span>
                    <div class="info">
                        <div class="name">${phone.name}</div>
                        <div class="meta">${phone.brand} • ${phone.year}</div>
                    </div>
                </div>
            </td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.cameraScore, 'camera')}">${phone.specs.cameraScore}</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.processorScore, 'cpu')}">${phone.specs.processorScore}</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.ram, 'ram')}">${phone.specs.ram} ГБ</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.battery, 'battery')}">${phone.specs.battery}</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.charging, 'charging')}">${phone.specs.charging} Вт</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.screenSize, 'screen')}">${phone.specs.screenSize}"</span></td>
            <td><span class="heat-cell ${getHeatClass(phone.specs.price, 'price')}">${Math.round(phone.specs.price / 1000)}к</span></td>
        </tr>
    `).join('');
}

// ==================== SIZE COMPARISON ====================
function renderSizePhonesList() {
    const container = document.getElementById('sizePhonesList');
    const sortedPhones = [...phones].sort((a, b) => b.specs.screenSize - a.specs.screenSize);
    
    container.innerHTML = sortedPhones.map(phone => `
        <div class="size-phone-item ${selectedSizePhones.includes(phone.id) ? 'selected' : ''}" 
             onclick="toggleSizePhone('${phone.id}')">
            <span class="checkbox">${selectedSizePhones.includes(phone.id) ? '✓' : ''}</span>
            <span class="emoji">${phone.emoji}</span>
            <div class="details">
                <div class="name">${phone.name}</div>
                <div class="dims">${phone.specs.height}×${phone.specs.width} мм • ${phone.specs.screenSize}"</div>
            </div>
        </div>
    `).join('');
}

function toggleSizePhone(phoneId) {
    const idx = selectedSizePhones.indexOf(phoneId);
    
    if (idx > -1) {
        selectedSizePhones.splice(idx, 1);
    } else {
        if (selectedSizePhones.length >= 4) {
            showToast('⚠️ ' + t('maxPhones'), 'error');
            return;
        }
        selectedSizePhones.push(phoneId);
    }
    
    renderSizePhonesList();
    renderSizeVisual();
}

function renderSizeVisual() {
    const container = document.getElementById('sizePhonesDisplay');
    const statsContainer = document.getElementById('sizeStats');
    
    if (selectedSizePhones.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);text-align:center;">${t('selectToCompare')}</p>`;
        statsContainer.innerHTML = '';
        return;
    }
    
    const selectedData = selectedSizePhones.map(id => phones.find(p => p.id === id)).filter(Boolean);
    const scale = 2.3;
    
    const colors =[
        'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'linear-gradient(135deg, #06b6d4, #22d3ee)',
        'linear-gradient(135deg, #10b981, #34d399)',
        'linear-gradient(135deg, #f59e0b, #fbbf24)'
    ];
    
    container.innerHTML = selectedData.map((phone, i) => {
        const heightPx = phone.specs.height * scale;
        const widthPx = phone.specs.width * scale;
        
        return `
            <div class="size-phone-visual">
                <div class="size-phone-body" style="
                    width: ${widthPx}px; 
                    height: ${heightPx}px; 
                    background: ${colors[i]};
                ">
                    <span class="emoji">${phone.emoji}</span>
                </div>
                <div class="size-phone-info">
                    <div class="name">${phone.name}</div>
                    <div class="dims">${phone.specs.height}×${phone.specs.width}×${phone.specs.thickness} мм</div>
                    <div class="dims">${phone.specs.weight} г • ${phone.specs.screenSize}"</div>
                </div>
            </div>
        `;
    }).join('');
    
    const heights = selectedData.map(p => p.specs.height);
    const widths = selectedData.map(p => p.specs.width);
    const weights = selectedData.map(p => p.specs.weight);
    const screens = selectedData.map(p => p.specs.screenSize);
    const thicknesses = selectedData.map(p => p.specs.thickness);
    
    statsContainer.innerHTML = `
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Самый высокий' : 'Tallest'}</div>
            <div class="value">${Math.max(...heights)} мм</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Самый компактный' : 'Most Compact'}</div>
            <div class="value">${Math.min(...heights)} мм</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Разница высоты' : 'Height Diff'}</div>
            <div class="value">${(Math.max(...heights) - Math.min(...heights)).toFixed(1)} мм</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Самый лёгкий' : 'Lightest'}</div>
            <div class="value">${Math.min(...weights)} г</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Самый тяжёлый' : 'Heaviest'}</div>
            <div class="value">${Math.max(...weights)} г</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Разница веса' : 'Weight Diff'}</div>
            <div class="value">${Math.max(...weights) - Math.min(...weights)} г</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Макс. экран' : 'Max Screen'}</div>
            <div class="value">${Math.max(...screens)}"</div>
        </div>
        <div class="size-stat-card">
            <div class="label">${currentLang === 'ru' ? 'Самый тонкий' : 'Thinnest'}</div>
            <div class="value">${Math.min(...thicknesses)} мм</div>
        </div>
    `;
}

// ==================== GENERATIONS COMPARISON ====================
function renderGenSeriesSelector() {
    const container = document.getElementById('genSeriesSelector');
    
    container.innerHTML = generationSeries.map(series => `
        <button class="gen-series-btn ${currentGenSeries === series.id ? 'active' : ''}" 
                onclick="selectGenSeries('${series.id}')">
            <span class="emoji">${series.emoji}</span>
            <span>${series.name}</span>
        </button>
    `).join('');
}

function selectGenSeries(seriesId) {
    currentGenSeries = seriesId;
    renderGenSeriesSelector();
    renderGenTimeline();
}

function renderGenTimeline() {
    const series = generationSeries.find(s => s.id === currentGenSeries);
    const timeline = document.getElementById('genTimeline');
    const summary = document.getElementById('genSummary');
    
    if (!series) {
        timeline.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:60px;">${t('selectSeries')}</p>`;
        summary.style.display = 'none';
        return;
    }
    
    const seriesPhones = series.phones
        .map(id => phones.find(p => p.id === id))
        .filter(Boolean)
        .sort((a, b) => a.year - b.year);
    
    if (seriesPhones.length < 2) {
        timeline.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:60px;">Недостаточно моделей для сравнения</p>`;
        summary.style.display = 'none';
        return;
    }
    
    timeline.innerHTML = seriesPhones.map((phone, index) => {
        const prevPhone = index > 0 ? seriesPhones[index - 1] : null;
        
        const changes = prevPhone ? {
            cpu: calcChange(phone.specs.processorScore, prevPhone.specs.processorScore),
            battery: calcChange(phone.specs.battery, prevPhone.specs.battery),
            camera: calcChange(phone.specs.cameraScore, prevPhone.specs.cameraScore),
            charging: calcChange(phone.specs.charging, prevPhone.specs.charging),
            price: calcChange(phone.specs.price, prevPhone.specs.price),
            weight: calcChange(phone.specs.weight, prevPhone.specs.weight),
            screen: calcChange(phone.specs.screenSize, prevPhone.specs.screenSize),
            ram: calcChange(phone.specs.ram, prevPhone.specs.ram)
        } : null;
        
        return `
            <div class="gen-timeline-item">
                <div class="gen-timeline-dot"></div>
                <div class="gen-timeline-card">
                    <div class="gen-card-header">
                        <span class="emoji">${phone.emoji}</span>
                        <div class="info">
                            <h4>${phone.name}</h4>
                            <span class="year">${phone.year} • ${phone.specs.priceStr}</span>
                        </div>
                    </div>
                    <div class="gen-specs-grid">
                        <div class="gen-spec-item">
                            <div class="label">⚡ ${currentLang === 'ru' ? 'Производительность' : 'Performance'}</div>
                            <div class="value">${phone.specs.processorScore}/100</div>
                            ${changes ? `<div class="change ${changes.cpu >= 0 ? 'up' : 'down'}">${changes.cpu > 0 ? '+' : ''}${changes.cpu}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">🔋 ${currentLang === 'ru' ? 'Батарея' : 'Battery'}</div>
                            <div class="value">${phone.specs.battery} мАч</div>
                            ${changes ? `<div class="change ${changes.battery >= 0 ? 'up' : 'down'}">${changes.battery > 0 ? '+' : ''}${changes.battery}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">📷 ${currentLang === 'ru' ? 'Камера' : 'Camera'}</div>
                            <div class="value">${phone.specs.cameraScore}/100</div>
                            ${changes ? `<div class="change ${changes.camera >= 0 ? 'up' : 'down'}">${changes.camera > 0 ? '+' : ''}${changes.camera}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">🔌 ${currentLang === 'ru' ? 'Зарядка' : 'Charging'}</div>
                            <div class="value">${phone.specs.charging} Вт</div>
                            ${changes ? `<div class="change ${changes.charging >= 0 ? 'up' : 'down'}">${changes.charging > 0 ? '+' : ''}${changes.charging}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">🧠 ${currentLang === 'ru' ? 'ОЗУ' : 'RAM'}</div>
                            <div class="value">${phone.specs.ram} ГБ</div>
                            ${changes ? `<div class="change ${changes.ram >= 0 ? 'up' : 'down'}">${changes.ram > 0 ? '+' : ''}${changes.ram}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">💰 ${currentLang === 'ru' ? 'Цена' : 'Price'}</div>
                            <div class="value">${Math.round(phone.specs.price / 1000)}к ₽</div>
                            ${changes ? `<div class="change ${changes.price <= 0 ? 'up' : 'down'}">${changes.price > 0 ? '+' : ''}${changes.price}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">⚖️ ${currentLang === 'ru' ? 'Вес' : 'Weight'}</div>
                            <div class="value">${phone.specs.weight} г</div>
                            ${changes ? `<div class="change ${changes.weight <= 0 ? 'up' : 'down'}">${changes.weight > 0 ? '+' : ''}${changes.weight}%</div>` : ''}
                        </div>
                        <div class="gen-spec-item">
                            <div class="label">📺 ${currentLang === 'ru' ? 'Экран' : 'Screen'}</div>
                            <div class="value">${phone.specs.screenSize}"</div>
                            ${changes ? `<div class="change ${changes.screen >= 0 ? 'up' : 'down'}">${changes.screen > 0 ? '+' : ''}${changes.screen}%</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Summary
    if (seriesPhones.length >= 2) {
        const first = seriesPhones[0];
        const last = seriesPhones[seriesPhones.length - 1];
        
        const totalChanges = {
            cpu: calcChange(last.specs.processorScore, first.specs.processorScore),
            battery: calcChange(last.specs.battery, first.specs.battery),
            camera: calcChange(last.specs.cameraScore, first.specs.cameraScore),
            charging: calcChange(last.specs.charging, first.specs.charging),
            price: calcChange(last.specs.price, first.specs.price),
            ram: calcChange(last.specs.ram, first.specs.ram)
        };
        
        summary.innerHTML = `
            <h4>📊 ${currentLang === 'ru' ? 'Эволюция' : 'Evolution'} ${series.name}: ${first.year} → ${last.year}</h4>
            <div class="gen-summary-grid">
                <div class="gen-summary-item">
                    <div class="icon">⚡</div>
                    <div class="label">${currentLang === 'ru' ? 'Производительность' : 'Performance'}</div>
                    <div class="value ${totalChanges.cpu >= 0 ? 'green' : 'red'}">
                        ${totalChanges.cpu > 0 ? '+' : ''}${totalChanges.cpu}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">🔋</div>
                    <div class="label">${currentLang === 'ru' ? 'Батарея' : 'Battery'}</div>
                    <div class="value ${totalChanges.battery >= 0 ? 'green' : 'red'}">
                        ${totalChanges.battery > 0 ? '+' : ''}${totalChanges.battery}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">📷</div>
                    <div class="label">${currentLang === 'ru' ? 'Камера' : 'Camera'}</div>
                    <div class="value ${totalChanges.camera >= 0 ? 'green' : 'red'}">
                        ${totalChanges.camera > 0 ? '+' : ''}${totalChanges.camera}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">🔌</div>
                    <div class="label">${currentLang === 'ru' ? 'Зарядка' : 'Charging'}</div>
                    <div class="value ${totalChanges.charging >= 0 ? 'green' : 'red'}">
                        ${totalChanges.charging > 0 ? '+' : ''}${totalChanges.charging}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">🧠</div>
                    <div class="label">${currentLang === 'ru' ? 'ОЗУ' : 'RAM'}</div>
                    <div class="value ${totalChanges.ram >= 0 ? 'green' : 'red'}">
                        ${totalChanges.ram > 0 ? '+' : ''}${totalChanges.ram}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">💰</div>
                    <div class="label">${currentLang === 'ru' ? 'Цена' : 'Price'}</div>
                    <div class="value ${totalChanges.price <= 0 ? 'green' : 'red'}">
                        ${totalChanges.price > 0 ? '+' : ''}${totalChanges.price}%
                    </div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">📅</div>
                    <div class="label">${currentLang === 'ru' ? 'Поколений' : 'Generations'}</div>
                    <div class="value blue">${seriesPhones.length}</div>
                </div>
                <div class="gen-summary-item">
                    <div class="icon">📆</div>
                    <div class="label">${currentLang === 'ru' ? 'Лет эволюции' : 'Years'}</div>
                    <div class="value blue">${last.year - first.year}</div>
                </div>
            </div>
        `;
        summary.style.display = 'block';
    } else {
        summary.style.display = 'none';
    }
}

function calcChange(newVal, oldVal) {
    if (!oldVal) return 0;
    return Math.round(((newVal - oldVal) / oldVal) * 100);
}