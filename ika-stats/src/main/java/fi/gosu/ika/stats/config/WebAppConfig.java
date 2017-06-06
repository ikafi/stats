package fi.gosu.ika.stats.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Database Configuration
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Configuration
@EnableWebMvc
public class WebAppConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
        registry.addResourceHandler("/css/**").addResourceLocations("/public/css/");
        registry.addResourceHandler("/js/**").addResourceLocations("/public/js/");
        registry.addResourceHandler("/lib/**").addResourceLocations("/public/lib/");
    }
}