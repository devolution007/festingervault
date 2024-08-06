<?php

namespace FestingerVault\api;

use FestingerVault\Helper;
use FestingerVault\Installer;

class Item extends ApiBase {
    /**
     * @param \WP_REST_Request $request
     */
    public function categories(\WP_REST_Request $request) {
        $type = $request->get_param("type");
        return Helper::engine_post("item/categories", [
            "type" => $type,
        ]);

    }

    /**
     * @param \WP_REST_Request $request
     */
    public function changelog(\WP_REST_Request $request) {
        $page    = $request->get_param("page");
        $item_id = $request->get_param("item_id");
        return Helper::engine_post("item/changelog", [
            "item_id" => $item_id,
            "page"    => $page,
        ]);
    }

    /**
     * @param \WP_REST_Request $request
     */
    public function demo_content(\WP_REST_Request $request) {
        $page    = $request->get_param("page");
        $item_id = $request->get_param("item_id");
        return Helper::engine_post("item/demo-content", [
            "item_id" => $item_id,
            "page"    => $page,
        ]);

    }

    /**
     * @param \WP_REST_Request $request
     */
    public function detail(\WP_REST_Request $request) {
        $item_id = $request->get_param("item_id");

        return Helper::engine_post("item/detail", [
            "item_id" => $item_id,
        ]);

    }

    /**
     * @param \WP_REST_Request $request
     * @return mixed
     */
    public function download_additional(\WP_REST_Request $request) {
        $item_id     = $request->get_param("item_id");
        $media_id    = $request->get_param("media_id");
        $item_detail = Helper::engine_post("item/detail", [
            "item_id" => $item_id,
        ]);
        if (is_wp_error($item_detail)) {
            return new \WP_Error("item_detail", "Error getting Item detail");
        }
        return Helper::engine_post("item/download-additional", [
            "item_id"  => $item_id,
            "media_id" => $media_id,
        ]);


    }

    public function endpoints() {

        return [
            "list"         => [
                'callback' => [$this, 'items'],
            ],
            "categories"   => [
                'callback' => [$this, 'categories'],
            ],
            "detail"       => [
                'callback' => [$this, 'detail'],
            ],
            "stats"        => [
                'callback' => [$this, 'stats'],
            ],
            "changelog"    => [
                'callback' => [$this, 'changelog'],
            ],
            "demo-content" => [
                'callback' => [$this, 'demo_content'],
            ],
            "install"      => [
                'callback'            => [$this, 'install'],
                'permission_callback' => [$this, "user_can_install"],
            ],
            "download-additional"      => [
                'callback'            => [$this, 'download_additional'],
            ],

        ];
    }

    /**
     * @param \WP_REST_Request $request
     */
    public function install(\WP_REST_Request $request) {
        $item_id     = $request->get_param("item_id");
        $method      = $request->get_param("method");
        $media_id    = $request->get_param("media_id");
        $item_detail = Helper::engine_post("item/detail", [
            "item_id" => $item_id,
        ]);
        if (is_wp_error($item_detail)) {
            return new \WP_Error("item_detail", "Error getting Item detail");
        }
        $download_detail = Helper::engine_post("item/download", [
            "item_id"  => $item_id,
            "method"   => $method,
            "media_id" => $media_id,
        ]);
        if (is_wp_error($download_detail)) {
            return new \WP_Error(400, "Error getting zip file information");
        }
        if ("elementor-template-kits" === $item_detail["type"] || "download" === $method) {
            return $download_detail;
        }
        $installer = new Installer($item_detail, $download_detail);
        $status    = $installer->run();
        if (is_wp_error($status)) {
            return new \WP_Error("item_install", "Error running item installation/update");
        }
        return ['success' => true];
    }

    /**
     * @param \WP_REST_Request $request
     */
    public function items(\WP_REST_Request $request) {
        $type     = $request->get_param("type");
        $page     = $request->get_param("page");
        $keyword  = $request->get_param("keyword");
        $filter   = $request->get_param("filter");
        $sort     = $request->get_param("sort");
        $per_page = $request->get_param("per_page");
        return Helper::engine_post("item/list", [
            "type"     => $type,
            "page"     => $page,
            "keyword"  => $keyword,
            "filter"   => $filter,
            "sort"     => $sort,
            "per_page" => $per_page,
        ]);

    }

    /**
     * @param \WP_REST_Request $request
     */
    public function stats(\WP_REST_Request $request) {
        return Helper::engine_post("item/stats");

    }

    protected function prefix() {
        return "item";
    }
}
