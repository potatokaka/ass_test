<div class="page">
    <?php 
        // 上一頁 (三元運算子)
        echo ($pageIndex > 1) ? "<a href='?page=$page_prev' class='page__item'>prev</a> " : " ";
        // 所有頁碼
        for ($i=1; $i <= $pages; $i++) {
            echo ($i === $pageIndex) ?  "<a href='?page=$i' class='page__item active'>$i</a>" : "<a href='?page=$i' class='page__item'>$i</a>";
        }
        // 下一頁
        echo ($pageIndex < $pages) ? "<a href='?page=$page_next' class='page__item'>next</a>" : " ";
    
    ?>
</div>
