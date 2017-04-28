package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.Resources;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Resources Repository
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
public interface ResourcesRepository extends JpaRepository<Resources, Long> {
}
