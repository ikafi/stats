package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.Town;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Town Repository
 *
 * @author Joppe151617
 * @since 0.1.0
 */
public interface TownRepository extends JpaRepository<Town, Long> {
}